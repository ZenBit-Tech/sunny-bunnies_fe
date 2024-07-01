import { useCallback } from "react";

import {
	ReadonlySignal,
	Signal,
	useComputed,
	useSignal,
	useSignalEffect,
} from "@preact/signals-react";

type Options = {
	min: number;
	sec: number;
};

type ReturnFunctionType = {
	resetTimer: () => void;
	startTimer: () => void;
	stopTimer: () => void;
	timeRemaining: ReadonlySignal<string>;
};

const useTimer = ({ min, sec }: Options): ReturnFunctionType => {
	const timerStartValue = 0;
	const timerEndValue = 59;
	const timerSecIncrement = 1;
	const timerMinIncrement = 1;
	const intervalIterationMs = 1000;
	const singleDigitUpperLimit = 10;

	const minutes = useSignal(min);
	const seconds = useSignal(sec);
	const isPaused = useSignal(true);

	const timeRemaining = useComputed(
		() =>
			`0${minutes.value}:${seconds.value < singleDigitUpperLimit ? "0" : ""}${
				seconds.value
			}`,
	);

	let intervalId: ReturnType<typeof setTimeout> | null = null;

	const makeTimerIteration = ({
		minutes,
		seconds,
	}: {
		minutes: Signal<number>;
		seconds: Signal<number>;
	}): void => {
		if (seconds.value === timerStartValue) {
			if (minutes.value > timerStartValue) {
				minutes.value -= timerMinIncrement;
				seconds.value = timerEndValue;
			} else clearInterval(intervalId as ReturnType<typeof setTimeout>);
		} else {
			seconds.value -= timerSecIncrement;
		}
	};

	const startTimer = useCallback(
		() => void (isPaused.value = false),
		[isPaused],
	);
	const stopTimer = useCallback(() => void (isPaused.value = true), [isPaused]);
	const resetTimer = useCallback(() => {
		seconds.value = sec;
		minutes.value = min;
	}, [seconds, minutes, sec, min]);

	useSignalEffect(() => {
		if (isPaused.value && intervalId) {
			clearInterval(intervalId);
			intervalId = null;
		} else if (!isPaused.value && !intervalId) {
			intervalId = setInterval(
				() => makeTimerIteration({ minutes, seconds }),
				intervalIterationMs,
			);
		}
	});

	return { resetTimer, startTimer, stopTimer, timeRemaining };
};

export { useTimer };

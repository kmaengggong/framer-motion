// ScrollTracker.tsx

"use client";

import { useState, useEffect } from "react";

export default function ScrollTracker() {
	const [scrollY, setScrollY] = useState(0); // 현재 스크롤 Y 위치 (px)
	const [vhAtTop, setVhAtTop] = useState(0); // 최상단에서의 vh

	useEffect(() => {
		const updateScrollPosition = () => {
			setScrollY(window.scrollY); // 현재 스크롤 Y 위치 (px)

			const viewportHeight = window.innerHeight;

			// 최상단 vh (스크롤 위치를 기준으로 vh 값 계산)
			setVhAtTop((scrollY / viewportHeight) * 100); // 현재 스크롤 비율을 vh로 변환
		};

		window.addEventListener("scroll", updateScrollPosition);
		window.addEventListener("resize", updateScrollPosition);

		// 초기화
		updateScrollPosition();

		return () => {
			window.removeEventListener("scroll", updateScrollPosition);
			window.removeEventListener("resize", updateScrollPosition);
		};
	}, [scrollY]);

	return (
		<div className="fixed bottom-4 left-4 bg-black text-white p-2 rounded-lg text-sm opacity-50">
			<p>현재 스크롤 위치 (px): {scrollY.toFixed(2)}px</p>
			<p>현재 최상단 위치 (vh): {vhAtTop.toFixed(2)}vh</p>
		</div>
	);
}

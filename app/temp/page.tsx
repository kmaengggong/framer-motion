import Link from "next/link";

export default function Home() {
	const numbers = Array.from({ length: 10 }, (_, i) => i);

	return (
		<main className="flex min-h-screen flex-col p-6">
			{numbers.map((n: number) => (
				<div key={n}>
					<Link href={`/test${n}`}>{`/test${n}`}</Link>
					<br />
				</div>
			))}
		</main>
	);
}

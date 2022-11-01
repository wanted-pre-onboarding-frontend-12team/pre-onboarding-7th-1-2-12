type Prop = {
	writeTime: string;
};

export default function DateFormat({ writeTime }: Prop) {
	const [year, month, day] = new Date(writeTime).toLocaleDateString().split('.').slice(0, 3);
	return `${year}년 ${month}월 ${day}일`;
}

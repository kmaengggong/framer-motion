import { fetchCharas } from "@/app/lib/data";
import CharaSelect from "./charaSelect";

const CharaSelects = async () => {
	const charas = await fetchCharas();

	return (
		<div className="">
			<CharaSelect charas={charas} />
		</div>
	);
};

export default CharaSelects;
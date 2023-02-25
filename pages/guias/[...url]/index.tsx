import { GetServerSideProps } from 'next';
import { IMetaTags, getHead } from "@/utils/helmet";
import GuiaStore from "@/stores/GuiaStore";
import { IGuia, ITag } from "@/definitions/definitions";
import Utils from "@/utils/utils";

type GuiaOrTag = "guia" | "tag" | "";

interface IGuiaProps {
}

export default function Guia(props: IGuiaProps) {

	return (
		<>
        
		</>
	);
}

export const getServerSideProps: GetServerSideProps<IGuiaProps> = async (context) => {
    try {
		let type: GuiaOrTag = "";
        const { url } = context.params as any; // = [ 'analisis-tecnico', 'indicadores' ];
        let urlConcat = ""
        if (url && Array.isArray(url)) urlConcat = url.join('@');
		const [tag, guia]: [ITag, IGuia] = await Promise.all([
			GuiaStore.getTag(urlConcat),
			GuiaStore.getGuia(urlConcat)
		]);

		console.log(tag, guia)

		if (!Utils.isObjectEmpty(guia)) {
			type = "guia";
		}

		if (!Utils.isObjectEmpty(tag)) {
			if (!tag.landing) throw new Error("Tiene tag sin landing") // TODO mejor hacer todo al final
			type = "tag";
		}

		if(type === "") throw new Error("No tiene landing ni guia")

		return {
			props: {
			}
		}
	} catch (error) {
		throw new Error("Ha fallado algo");
	}
};
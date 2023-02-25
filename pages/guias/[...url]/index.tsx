import { GetServerSideProps } from 'next';
import { IMetaTags, getHead } from "@/utils/helmet";
import GuiaStore from "@/stores/GuiaStore";
import { ITag } from "@/definitions/definitions";

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
        const { url } = context.params as any; // = [ 'analisis-tecnico', 'indicadores' ];
        let urlConcat = ""
        console.log(url)
        if (url && Array.isArray(url)) urlConcat = url.join('@');
        console.log(urlConcat)
        const tag: ITag = await GuiaStore.getTag(urlConcat)
        console.log(tag)
		return {
			props: {
			}
		}
	} catch (error) {
		throw new Error("Ha fallado algo");
	}
};
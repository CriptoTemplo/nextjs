import { GetServerSideProps } from 'next';
import { IMetaTags, getHead } from "@/utils/helmet";

interface IProps {
}

export default function Guias(props: IProps) {

	return (
		<>
		</>
	);
}

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
	try {
		return {
			props: {
			}
		}
	} catch (error) {
		throw new Error("Ha fallado algo");
	}
};
import React from 'react';
import Wispr from "./Wispr";
import { useScrollBottom } from "../../helpers";

const ListWispr = ({wisprs}) => {
	const wisprRef = useScrollBottom();
	const wisprComponents = wisprs.map(w => <Wispr key={w.id} body={w.content} />);
	return (
		<main ref={wisprRef} className="message-list">
			<section>
				{ wisprComponents }
			</section>
		</main>
	);
};

export default ListWispr;
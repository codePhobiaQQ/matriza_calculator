import React, {ReactNode} from 'react';

interface IHeader {
	children: ReactNode
}

const Header = ({children}: IHeader) => {
	return (
		<>
			<header className={"header"}>
				<div className="container">
					header
				</div>
			</header>
			{children}
		</>
	);
};

export default Header;
function Header(props) {
    return (
        <header>
            <div className="header">
                <div className="headerLeft">
                    <img src="./media/logo.svg" alt="" />
                    <span className="header-store">
                        Store
                    </span>
                </div>
                <div onClick={props.onClickBag} className="headerRight">     
                    <svg height="44" viewBox="0 0 13 44" width="13" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="m0 44h13v-44h-13z"/><path d="m12 25.9c0 .6-.5 1.1-1.1 1.1h-8.8c-.6 0-1.1-.5-1.1-1.1v-7.9c0-.5.5-1 1.1-1h8.9c.6 0 1.1.5 1.1 1.1v7.8zm-5.5-11.9c1.2 0 2.1.9 2.3 2h-4.6c.2-1.1 1.1-2 2.3-2zm4.4 2h-1.1c-.2-1.7-1.6-3-3.3-3s-3.1 1.3-3.3 3h-1.1c-1.2 0-2.1.9-2.1 2.1v7.9c0 1.1.9 2 2.1 2h8.9c1.1 0 2.1-.9 2.1-2.1v-7.9c-.1-1.1-1-2-2.2-2z" fill="#fff"/></g>
                    </svg>
                </div>
            </div>
        </header>
    );
}
export default Header;
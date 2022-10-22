function Filters({upper, down, vlabl}) {
    function openSortMenu() {
        const btn = document.getElementById('sorting-button');
        const cat = document.getElementsByClassName('cat-btns');
        if (cat[0].style.display === "flex") {
            btn.classList = "";
            cat[0].style.transform = "translateX(80px)";
            cat[0].style.opacity = '0';
            setTimeout(function(){cat[0].style.display = "none"}, 400);
        } else {
            btn.classList = "rotate";
            cat[0].style.display = "flex";
            setTimeout(function(){cat[0].style.transform = "translateX(0)"}, 100);
            setTimeout(function(){cat[0].style.opacity = "1"}, 10);
        }
    }
    return (
        <div className='content-header'>
            <div className="cat-btns">
                <button onClick={upper}>
                    Upper cost
                </button>
                <button onClick={down}>
                    Lower cost
                </button>
                <button onClick={vlabl}>
                    Vlabl choice
                </button>
            </div>
            <button id="sorting-button" onClick={openSortMenu}>
                sorting
            </button>
        </div>
    );
}
export default Filters;
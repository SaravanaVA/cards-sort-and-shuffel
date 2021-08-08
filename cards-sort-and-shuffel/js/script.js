window.onload = function () {
    document.getElementById("suffle-button").onclick = shuffleCardList;
    document.getElementById("sort-button").onclick = sortCardList;

    const container = document.getElementById("shufflelSort");

    const containerArray = Array.prototype.slice.call(container.children);

    const cardListArray = containerArray.slice(0);

    /**
     * Shuffling the given list list of array
     * @param {arr} arr array of all the item in grid list
     * @returns array of grid list with shuffles
     */
    const shuffle = (arr) => {
        let gridList = arr;

        for (let i = 0; i < gridList.length; i++) {
            let randomNumber = Math.floor(i * Math.random());
            let swap = gridList[randomNumber];
            gridList[randomNumber] = gridList[i];
            gridList[i] = swap;
        }

        return gridList;
    };

    /**
     * @param {arr} arr array of all the item in grid list
     * @returns sorted grid list with acending order
     */
    const sort = (arr) => {
        return arr.sort((a, b) => (a.innerText > b.innerText ? 1 : -1));
    };

    /**
     * Shuffling the grid items and adding back the
     * Shuffled grid items
     */
    function shuffleCardList() {
        console.log("list --", cardListArray);
        const shuffeledArray = shuffle(cardListArray);
        console.log("suffle  --", shuffeledArray);

        for (let i = 0; i < shuffeledArray.length; i++) {
            console.log("append -->", shuffeledArray[i]);
            container.appendChild(shuffeledArray[i]);
        }
    }

    /**
     * Sorting the shuffled grid items and adding
     * back to HTML dom after sorting
     */
    function sortCardList() {
        const sortedArray = sort(cardListArray);
        console.log("sorted  --", sortedArray);

        for (let i = 0; i < sortedArray.length; i++) {
            container.appendChild(sortedArray[i]);
        }
    }
};

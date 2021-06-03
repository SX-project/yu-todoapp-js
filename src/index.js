
document.getElementById("add-button").addEventListener("click", () => {

    //テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    //未完了リストへ追加する
    createIncompleteList(inputText);
})

//未完了リストへ追加する関数
const createIncompleteList = (text) => {

    //divタグを生成する
    const div = document.createElement("div");
    div.className = "list-row";

    //liタグを生成する
    const li = document.createElement("li");
    li.innerText = text;

    //button（完了）タグを作成する
    const doneButton = document.createElement("button");
    doneButton.innerText = "完了";
    doneButton.addEventListener("click", () => {

        //未完了リストから親要素であるdivタグを削除する
        deleteFromIncompleteList(doneButton.parentNode);

        //完了リストに追加する要素
        const addTarget = doneButton.parentNode;

        //liタグのテキストを取得
        const text = addTarget.firstElementChild.innerText;

        //divタグ以下を初期化
        addTarget.textContent = null;

        //liタグを作成する
        const li = document.createElement("li");
        li.innerText = text;

        //buttonタグ（戻す）を作成する
        const returnButton = document.createElement("button");
        returnButton.innerText = "戻す";
        returnButton.addEventListener("click", () => {

            //完了リストから親要素であるdivタグを削除する
            const returnTarget = returnButton.parentNode;
            document.getElementById("complete-list").removeChild(returnTarget);

            //テキスト取得
            const text = returnButton.parentNode.firstElementChild.innerText;

            //未完了リストへ追加する
            createIncompleteList(text);
        })

        //divタグの子要素に各要素を設定
        addTarget.appendChild(li);
        addTarget.appendChild(returnButton);

        //完了リストに追加
        document.getElementById("complete-list").appendChild(addTarget);
    });

    //button（削除）タグを作成する
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () =>  {

        //未完了リストから親要素であるdivを削除する
        deleteFromIncompleteList(deleteButton.parentNode);
    });

    //divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(doneButton);
    div.appendChild(deleteButton);

    //未完了リストに追加
    document.getElementById("incomplete-list").appendChild(div);
}

//未完了リストからdivタグを削除する関数
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
}


module.exports = function check(str, bracketsConfig) {
    // your solution
    let res = str;
    if (res.length % 2) return false;

    const remove = (str, config) => {
        const pairs = new Map(config);
        const l = str.length - 1;
        const arr = str.split("");
        for (let i = 0; i < l; i++) {
            if (pairs.get(arr[i]) === arr[i + 1]) {
                arr[i] = "";
                arr[i + 1] = "";
                i++;
            }
        }
        return arr.join("");
    };

    let l;
    while (1) {
        l = res.length;
        res = remove(res,bracketsConfig);
        if (res === "") return true;
        if (l === res.length) return false;
    }
};

module.exports = {
    mode: "jit",
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                quicksand: ["Quicksand_Regular"],
                quicksand_semibold: ["Quicksand_SemiBold"],
                quicksand_bold: ["Quicksand_Bold"]
            },
        },
    },
    plugins: [],
}

//todo: we may add the E(x), v(x) as parameters too

import {combinations} from 'mathjs'

const userOptions = [
    {
        name: "Binomial",

        mean:0,
        variance:0,
        sd:0,

        P:(n, p, x) => {
            return  combinations(n, x) * Math.pow(p, x) * Math.pow((1-p), (n - x))
        },

        color:"#A594FE",
        accentColor:"#8067FE",



        type: "Discrete",
        related: false,
        inputs: [{ label:"Trials", step:1, value:0}, {label:"Probability of success", step:0.001, value:0}],
        description: "Lorem ipsum dolor sit amet. Et quod dolor ut eveniet autem sit quos quidem 33 illum magnam. Id galisum vero quo quidem galisum At nesciunt sapiente non blanditiis corrupti qui eligendi nemo. Eum nostrum repudiandae sed facere laudantium sit facilis asperiores?\n"
    },
    {
        name: "Geometric",

        mean:0,
        variance:0,
        sd:0,

        P:(n, p, x) => {
            return  combinations(n, x) * Math.pow(p, x) * Math.pow((1-p), (n - x))
        },

        color:"#F694FE",
        accentColor:"#F267FE",
        type: "Discrete",
        related: false,
        inputs: [{label:"Probability of success", step:0.001, value:0}],
        description: "Lorem ipsum dolor sit amet. Et quod dolor ut eveniet autem sit quos quidem 33 illum magnam. Id galisum vero quo quidem galisum At nesciunt sapiente non blanditiis corrupti qui eligendi nemo. Eum nostrum repudiandae sed facere laudantium sit facilis asperiores?\n"
    },
    {
        name: "Hypergeometric",

        mean:0,
        variance:0,
        sd:0,

        P:(n, p, x) => {
            return  combinations(n, x) * Math.pow(p, x) * Math.pow((1-p), (n - x))
        },

        color:"#FE9494",
        accentColor:"#FE6767",
        type: "Discrete",
        related: false,
        inputs: [{label:"Sample size", step:1, value:0}, {label:"Total number of objects", step:1, value: 0}, {label:"Amount of successes", step:1, value: 0}],
        description: "Lorem ipsum dolor sit amet. Et quod dolor ut eveniet autem sit quos quidem 33 illum magnam. Id galisum vero quo quidem galisum At nesciunt sapiente non blanditiis corrupti qui eligendi nemo. Eum nostrum repudiandae sed facere laudantium sit facilis asperiores?\n"
    },
    {
        name: "Poisson",

        mean:0,
        variance:0,
        sd:0,

        P:(n, p, x) => {
            return  combinations(n, x) * Math.pow(p, x) * Math.pow((1-p), (n - x))
        },

        color:"#FEDA94",
        accentColor:"#FECB67",
        type: "Discrete",
        related: false,
        inputs: [{label:"λ ratio", step: 1, value: 0}],
        description: "Lorem ipsum dolor sit amet. Et quod dolor ut eveniet autem sit quos quidem 33 illum magnam. Id galisum vero quo quidem galisum At nesciunt sapiente non blanditiis corrupti qui eligendi nemo. Eum nostrum repudiandae sed facere laudantium sit facilis asperiores?\n"
    },
    {
        name: "Uniform",

        mean:0,
        variance:0,
        sd:0,

        P:(n, p, x) => {
            return  combinations(n, x) * Math.pow(p, x) * Math.pow((1-p), (n - x))
        },

        color:"#A5EF9F",
        accentColor:"#85E97C",
        type: "Continuous",
        related: true,
        inputs: [{label:"Population", step:1, value: 0}, {label:"Positive cases", step: 1, value: 0}],
        description: "Lorem ipsum dolor sit amet. Et quod dolor ut eveniet autem sit quos quidem 33 illum magnam. Id galisum vero quo quidem galisum At nesciunt sapiente non blanditiis corrupti qui eligendi nemo. Eum nostrum repudiandae sed facere laudantium sit facilis asperiores?\n"
    },
    {
        name: "Exponential",

        mean:0,
        variance:0,
        sd:0,

        P:(n, p, x) => {
            return  combinations(n, x) * Math.pow(p, x) * Math.pow((1-p), (n - x))
        },

        color:"#67B6FE",
        accentColor:"#67B6FE",
        type: "Continuous",
        related: false,
        inputs: [{label:"λ ratio", step:1, value: 0}],
        description: "Lorem ipsum dolor sit amet. Et quod dolor ut eveniet autem sit quos quidem 33 illum magnam. Id galisum vero quo quidem galisum At nesciunt sapiente non blanditiis corrupti qui eligendi nemo. Eum nostrum repudiandae sed facere laudantium sit facilis asperiores?\n"
    },
    {
        name: "Normal",

        mean:0,
        variance:0,
        sd:0,

        P:(n, p, x) => {
            return  combinations(n, x) * Math.pow(p, x) * Math.pow((1-p), (n - x))
        },

        color:"#84FEEB",
        accentColor:"#67FEE3",
        type: "Continuous",
        related: false,
        inputs: [{label:"Mean μ", step:1, value: 0}, {label:"Standard deviation σ", step: 1, value: 0}],
        description: "Lorem ipsum dolor sit amet. Et quod dolor ut eveniet autem sit quos quidem 33 illum magnam. Id galisum vero quo quidem galisum At nesciunt sapiente non blanditiis corrupti qui eligendi nemo. Eum nostrum repudiandae sed facere laudantium sit facilis asperiores?\n"
    },
    {
        name: "Log-Normal",

        mean:0,
        variance:0,
        sd:0,

        P:(n, p, x) => {
            return  combinations(n, x) * Math.pow(p, x) * Math.pow((1-p), (n - x))
        },

        color:"#FCFE94",
        accentColor:"#FBFE67",
        type: "Continuous",
        related: false,
        inputs: [{label:"Mean μ", step: 1, value: 0}, {label:"Standard deviation σ", step: 1, value: 0}],
        description: "Lorem ipsum dolor sit amet. Et quod dolor ut eveniet autem sit quos quidem 33 illum magnam. Id galisum vero quo quidem galisum At nesciunt sapiente non blanditiis corrupti qui eligendi nemo. Eum nostrum repudiandae sed facere laudantium sit facilis asperiores?\n"
    },
    {
        name: "t",

        mean:0,
        variance:0,
        sd:0,

        P:(n, p, x) => {
            return  combinations(n, x) * Math.pow(p, x) * Math.pow((1-p), (n - x))
        },

        color:"#FE94D4",
        accentColor:"#FE67C2",
        type: "Continuous",
        related: false,
        inputs: [{label:"Degrees of freedom", step: 1, value: 0}],
        description: "Lorem ipsum dolor sit amet. Et quod dolor ut eveniet autem sit quos quidem 33 illum magnam. Id galisum vero quo quidem galisum At nesciunt sapiente non blanditiis corrupti qui eligendi nemo. Eum nostrum repudiandae sed facere laudantium sit facilis asperiores?\n"
    },
]
export default userOptions;
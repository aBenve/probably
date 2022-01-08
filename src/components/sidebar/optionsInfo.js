
//todo: we may add the E(x), v(x) as parameters too

const userOptions = [
    {
        name: "Binomial",
        type: "Discrete",
        inputs: ["Trials", "Probability of success"],
        description: "Lorem ipsum dolor sit amet. Et quod dolor ut eveniet autem sit quos quidem 33 illum magnam. Id galisum vero quo quidem galisum At nesciunt sapiente non blanditiis corrupti qui eligendi nemo. Eum nostrum repudiandae sed facere laudantium sit facilis asperiores?\n"
    },
    {
        name: "Geometric",
        type: "Discrete",
        inputs: ["Probability of success"],
        description: "Lorem ipsum dolor sit amet. Et quod dolor ut eveniet autem sit quos quidem 33 illum magnam. Id galisum vero quo quidem galisum At nesciunt sapiente non blanditiis corrupti qui eligendi nemo. Eum nostrum repudiandae sed facere laudantium sit facilis asperiores?\n"
    },
    {
        name: "Hypergeometric",
        type: "Discrete",
        inputs: ["Sample size", "Total number of objects", "Amount of successes"],
        description: "Lorem ipsum dolor sit amet. Et quod dolor ut eveniet autem sit quos quidem 33 illum magnam. Id galisum vero quo quidem galisum At nesciunt sapiente non blanditiis corrupti qui eligendi nemo. Eum nostrum repudiandae sed facere laudantium sit facilis asperiores?\n"
    },
    {
        name: "Poisson",
        type: "Discrete",
        inputs: ["λ ratio"],
        description: "Lorem ipsum dolor sit amet. Et quod dolor ut eveniet autem sit quos quidem 33 illum magnam. Id galisum vero quo quidem galisum At nesciunt sapiente non blanditiis corrupti qui eligendi nemo. Eum nostrum repudiandae sed facere laudantium sit facilis asperiores?\n"
    },
    {
        name: "Uniform",
        type: "Continuous",
        inputs: ["Population", "Positive cases"],
        description: "Lorem ipsum dolor sit amet. Et quod dolor ut eveniet autem sit quos quidem 33 illum magnam. Id galisum vero quo quidem galisum At nesciunt sapiente non blanditiis corrupti qui eligendi nemo. Eum nostrum repudiandae sed facere laudantium sit facilis asperiores?\n"
    },
    {
        name: "Exponential",
        type: "Continuous",
        inputs: ["λ ratio"],
        description: "Lorem ipsum dolor sit amet. Et quod dolor ut eveniet autem sit quos quidem 33 illum magnam. Id galisum vero quo quidem galisum At nesciunt sapiente non blanditiis corrupti qui eligendi nemo. Eum nostrum repudiandae sed facere laudantium sit facilis asperiores?\n"
    },
    {
        name: "Normal",
        type: "Continuous",
        inputs: ["Mean μ ", "Standard deviation σ"],
        description: "Lorem ipsum dolor sit amet. Et quod dolor ut eveniet autem sit quos quidem 33 illum magnam. Id galisum vero quo quidem galisum At nesciunt sapiente non blanditiis corrupti qui eligendi nemo. Eum nostrum repudiandae sed facere laudantium sit facilis asperiores?\n"
    },
    {
        name: "Log-Normal",
        type: "Continuous",
        inputs: ["Mean μ ", "Standard deviation σ"],
        description: "Lorem ipsum dolor sit amet. Et quod dolor ut eveniet autem sit quos quidem 33 illum magnam. Id galisum vero quo quidem galisum At nesciunt sapiente non blanditiis corrupti qui eligendi nemo. Eum nostrum repudiandae sed facere laudantium sit facilis asperiores?\n"
    },
    {
        name: "t",
        type: "Continuous",
        inputs: ["Degrees of freedom"],
        description: "Lorem ipsum dolor sit amet. Et quod dolor ut eveniet autem sit quos quidem 33 illum magnam. Id galisum vero quo quidem galisum At nesciunt sapiente non blanditiis corrupti qui eligendi nemo. Eum nostrum repudiandae sed facere laudantium sit facilis asperiores?\n"
    },
]
export default userOptions;
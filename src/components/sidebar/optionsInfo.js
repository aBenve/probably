
//todo: we may add the E(x), v(x) as parameters too

import {combinations, factorial} from 'mathjs'
//import Statistics from 'statistics.js'
import standardNormal from "../../util/standarNormal";

let generalSD = (variance) => {
    return Math.sqrt(variance)
}

let BinomialMean = (inputs) => {
    return inputs[0] * inputs[1]
}
let BinomialVariance = (inputs) => {
    return inputs[0] * inputs[1] * (1 - inputs[1])
}
let BinomialLowerValue = (inputs) => {
    let mean = BinomialMean(inputs)
    let sd = generalSD(BinomialVariance(inputs))
    return Math.floor( mean - 6 * sd > 0 ? mean - 6 *  sd : 0)
}
let BinomialUpperValue = (inputs) => {
    return inputs[0] < 10 ? inputs[0] : Math.min(inputs[0], Math.floor(BinomialMean(inputs) + 6 *generalSD(BinomialVariance(inputs))))
}

let GeometricMean = (inputs) => {
    return 1/inputs[0]
}
let GeometricVariance = (inputs) => {
    return (1-inputs[0]) / Math.pow(inputs[0], 2)
}

let GeometricLowerValue = (inputs) => {
    return Math.max(1, GeometricMean(inputs) - 5 * generalSD(GeometricVariance(inputs)))
}

let GeometricUpperValue = (inputs) => {
    let lower = GeometricLowerValue(inputs)
    let toRet = Math.ceil(GeometricMean(inputs) + 5 * generalSD(GeometricVariance(inputs)))
    if(toRet - lower < 4) return lower + 4
    return toRet
}
/*
    0 -> n
    1 -> M
    2 -> N
 */
let HypergeometricMean = (inputs) => {
    return inputs[0] * inputs[1] / inputs[2]
}
let HypergeometricVariance = (inputs) => {
    return inputs[0] * inputs[1] / inputs[2] * (1- inputs[1]/inputs[2])*(inputs[2]-inputs[0])/(inputs[2]-1)
}

let HypereometricLowerValue = (inputs) => {
    return Math.max(1, GeometricMean(inputs) - 5 * generalSD(GeometricVariance(inputs)))
}

let HypereometricUpperValue = (inputs) => {
    let lower = GeometricLowerValue(inputs)
    let toRet = Math.ceil(GeometricMean(inputs) + 5 * generalSD(GeometricVariance(inputs)))
    if(toRet - lower < 4) return lower + 4
    return toRet
}

let PoissonMean = (inputs) => {
    return parseFloat(inputs[0])
}
let PoissonVariance = (inputs) => {
    return parseFloat(inputs[0])
}

let PoissonLowerValue = (inputs) => {
    return parseFloat(Math.max(1, PoissonMean(inputs) - 4 * generalSD(PoissonVariance(inputs))))
}

let PoissonUpperValue = (inputs) => {
    if(inputs[0] < 0.5)
        return 4
    if(inputs[0] >= 0.5 && inputs[0] < 1)
        return 6
    if(inputs[0] >= 1 && inputs[0] < 20)
        return Math.floor(PoissonMean(inputs) + 5 * generalSD(PoissonVariance(inputs)))
    return Math.floor(PoissonMean(inputs) + 4 * generalSD(PoissonVariance(inputs)))
}

let NormalMean = (inputs) => {
    return +inputs[0]
}
let NormalVariance = (inputs) => {
    return Math.pow(+inputs[1],2)
}

let NormalLowerValue = (inputs) => {
    return NormalMean(inputs) - 4 * generalSD(NormalVariance(inputs))
}

let NormalUpperValue = (inputs) => {
    return NormalMean(inputs) + 4 * generalSD(NormalVariance(inputs))

}

let ExponentialMean = (inputs) => {
    return inputs[0] === 0 ? 0 : 1/inputs[0]
}
let ExponentialVariance = (inputs) => {
    return inputs[0] === 0 ? 0 : 1/Math.pow(inputs[0],2)
}

let ExponentialLowerValue = (inputs) => {
    return inputs[0] * 0
}

let ExponentialUpperValue = (inputs) => {
    return ExponentialPercentile(inputs, 0.999)

}

let ExponentialPercentile = (inputs,prob) => {
    if(inputs[0] === 0)
        return 0
    return -Math.log(1-prob)/inputs[0]
}

let UniformMean = (inputs) => {
    return (inputs[0] + inputs[1])/2
}
let UniformVariance = (inputs) => {
    return Math.pow(inputs[1] - inputs[0],2)/12
}

let UniformLowerValue = (inputs) => {
    return inputs[0] - (inputs[1] - inputs[0])/2 > 0 ? inputs[0] - (inputs[1] - inputs[0])/2 : 0
}

let UniformUpperValue = (inputs) => {
    return +inputs[1] + (+inputs[1] - +inputs[0])/2

}

const userOptions = [
    {
        name: "Binomial",

        mean:(inputs) => {return BinomialMean(inputs)},
        variance:(inputs) => {return BinomialVariance(inputs)},
        sd:(inputs) => {return generalSD(BinomialVariance(inputs))},

        lowerValue:(inputs) => { return BinomialLowerValue(inputs)},
        upperValue:(inputs) => { return BinomialUpperValue(inputs)},

        P:(inputs, x) => {
            return  combinations(inputs[0], x) * Math.pow(inputs[1], x) * Math.pow((1-inputs[1]), (inputs[0] - x))
        },

        color:"#A594FE",
        accentColor:"#8067FE",

        type: "Discrete",
        related: false,
        inputs: [{ label:"Trials", step:1, value:0, max:500}, {label:"Probability of success", step:0.001, value:0, max:1}],
        description: {
            directions: "Enter the trials (n) and the probability of success (p) of the event and select a number or a range for the amount of times you want that event to know the probability (x value on the chart)",
            equations: [
                {eq:"f(x) = P(X = x) = \\binom{n}{x}p^x(1-p)^{n-x}", label:"p"},
                {eq:"E(X) = np", label:"mean"},
                {eq:"Var(X) = np(1-p)", label:"variance"},
                {eq:"SD(X) = \\sqrt{np(1-p)}", label:"sd"},
            ],
            help:""
        },
    },
    {
        name: "Geometric",

        mean:(inputs) => {return GeometricMean(inputs)},
        variance:(inputs) => {return GeometricVariance(inputs)},
        sd:(inputs) => {return generalSD(GeometricVariance(inputs))},

        lowerValue:(inputs) => { return GeometricLowerValue(inputs)},
        upperValue:(inputs) => { return GeometricUpperValue(inputs)},

        P:(inputs, x) => {
            return  inputs[0] * Math.pow(1 - inputs[0], x - 1)
        },


        color:"#F694FE",
        accentColor:"#F267FE",
        type: "Discrete",
        related: false,
        inputs: [{label:"Probability of success", step:0.001, value:0, max:1}],
        description: {
            directions: "Enter the probability of success (p) and select a number or a range in which the first success occurs (x value on the chart)",
            equations: [
                {eq:"f(x) = P(X = x) = p(1-p)^{x-1} \\quad 0 \\lt p \\le 1", label:"p"},
                {eq:"E(X) = \\frac{1}{p}", label:"mean"},
                {eq:"Var(X) = \\frac{1-p}{p^2}", label:"variance"},
                {eq:"SD(X) = \\sqrt{\\frac{1-p}{p^2}}", label:"sd"},
            ],
            help:""
        },
    },
    {
        name: "Hypergeometric",

        mean:(inputs) => {return HypergeometricMean(inputs)},
        variance:(inputs) => {return HypergeometricVariance(inputs)},
        sd:(inputs) => {return generalSD(HypergeometricVariance(inputs))},

        lowerValue:(inputs) => { return HypereometricLowerValue(inputs)},
        upperValue:(inputs) => { return HypereometricUpperValue(inputs)},

        P:(inputs, x) => {
            return (combinations(inputs[1], x) * combinations(inputs[2] - inputs[1], inputs[2]-x)/combinations(inputs[2],inputs[0]))
        },

        color:"#FE9494",
        accentColor:"#FE6767",
        type: "Discrete",
        related: false,
        inputs: [{label:"Sample size", step:1, value:0, max:500}, {label:"Total number of objects", step:1, value: 0, max:500}, {label:"Amount of successes", step:1, value: 0, max:500}],
        description: {
            directions: "Enter the size of the sample (n), total number of objects (N) and the number of successes (M) and select a number or a range for the amount of times that event you want to know the probability (x value on the chart)",
            equations: [
                {eq:"f(x) = P(X = x) = \\frac{\\binom{M}{n}\\binom{N-M}{n-x}}{\\binom{N}{n}}", label:"p"},
                {eq:"E(X) = n\\frac{M}{N}", label:"mean"},
                {eq:"Var(X) =  n\\frac{M}{N} (1 - \\frac{M}{N} (\\frac{N-n}{N-1}))", label:"variance"},
                {eq:"SD(X) = \\sqrt{n\\frac{M}{N} (1 - \\frac{M}{N} (\\frac{N-n}{N-1}))}", label:"sd"},
            ],
            help:""
        },
    },
    {
        name: "Poisson",

        mean:(inputs) => {return PoissonMean(inputs)},
        variance:(inputs) => {return PoissonVariance(inputs)},
        sd:(inputs) => {return generalSD(PoissonVariance(inputs))},

        lowerValue:(inputs) => { return PoissonLowerValue(inputs)},
        upperValue:(inputs) => { return PoissonUpperValue(inputs)},

        P:(inputs, x) => {
            return  Math.exp(-inputs[0]) * Math.pow(inputs[0], x) / factorial(x)
        },

        color:"#FEDA94",
        accentColor:"#FECB67",
        type: "Discrete",
        related: false,
        inputs: [{label:"λ ratio", step: 0.01, value: 0, max:150}],
        description: {
            directions: "Enter the rate λ and select a number or a range for more precise information (x value on the chart)",
            equations: [
                {eq:"f(x) = P(X = x) = \\frac{e^{-\\lambda} \\lambda^x}{x!} \\quad x \\gt 0", label:"p"},
                {eq:"E(X) = \\lambda", label:"mean"},
                {eq:"Var(X) =  \\lambda", label:"variance"},
                {eq:"SD(X) = \\sqrt{\\lambda}", label:"sd"},
            ],
            help:""
        },
    },
    {
        name: "Uniform",

        mean:(inputs) => {return UniformMean(inputs)},
        variance:(inputs) => {return UniformVariance(inputs)},
        sd:(inputs) => {return generalSD(UniformVariance(inputs))},

        lowerValue:(inputs) => { return UniformLowerValue(inputs)},
        upperValue:(inputs) => { return UniformUpperValue(inputs)},

        P:(inputs, x) => {
            if(x >= inputs[0] && x <= inputs[1])
                return 1/(inputs[1] - inputs[0])
            return 0
        },

        F:(inputs, x) => {
            if(x <= inputs[0])
                return 0
            if(x >= inputs[1])
                return 1
            return (x - inputs[0]) / (inputs[1] - inputs[0])
        },

        color:"#A5EF9F",
        accentColor:"#85E97C",
        type: "Continuous",
        related: "Uniform", // CASO ESPECIAL
        inputs: [{label:"Start", step:1, value: 0, max:500}, {label:"End", step: 1, value: 0, max:500}],
        description: {
            directions: "Enter start (a) and end (b) abd select a range for more precise information (x value on the chart)",
            equations: [
                {eq:"f_x(x) = \\frac{1}{b-a} \\quad x \\in (a,b)", label:"p"},
                {eq:"F_X(x) = \\begin{cases}\n" +
                        "   0 &x \\le a \\\\\n" +
                        "   \\frac{x-a}{b-a} &x \\in (a,b) \\\\\n" +
                        "   1 &x \\ge b\n" +
                        "\\end{cases}", label:"F"},
                {eq:"E(X) = \\frac{a+b}{2}", label:"mean"},
                {eq:"Var(X) =  \\frac{(b-a)^2}{12}", label:"variance"},
                {eq:"SD(X) = \\sqrt{\\frac{(b-a)^2}{12}}", label:"sd"},
            ],
            help:""
        },
    },
    {
        name: "Exponential",

        mean:(inputs) => {return ExponentialMean(inputs)},
        variance:(inputs) => {return ExponentialVariance(inputs)},
        sd:(inputs) => {return generalSD(ExponentialVariance(inputs))},

        lowerValue:(inputs) => { return ExponentialLowerValue(inputs)},
        upperValue:(inputs) => { return ExponentialUpperValue(inputs)},

        P:(inputs, x) => {
            return inputs[0] * Math.exp(-inputs[0] * x)
        },

        F:(inputs, x) => {
            return (1 - Math.exp(-inputs[0] * x))
        },

        color:"#67B6FE",
        accentColor:"#67B6FE",
        type: "Continuous",
        related: false,
        inputs: [{label:"λ ratio", step:0.01, value: 0, max:200}],
        description: {
            directions: " abd select a range for more precise information (x value on the chart)",
            equations: [
                {eq:"f_x(x) = \\lambda e^{-\\lambda x} \\quad x \\gt 0", label:"p"},
                {eq:"F_X(x) =  P(X \\le x) = \\begin{cases}\n" +
                        "   0 &x \\le 0 \\\\\n" +
                        "   1 - e^{-\\lambda x} &x \\gt 0\\\\\n" +
                        "   \\end{cases}", label:"F"},
                {eq:"E(X) = \\frac{a+b}{2}", label:"mean"},
                {eq:"Var(X) =  \\frac{(b-a)^2}{12}", label:"variance"},
                {eq:"SD(X) = \\sqrt{\\frac{(b-a)^2}{12}}", label:"sd"},
            ],
            help:""
        },
    },
    {
        name: "Normal",

        mean:(inputs) => {return NormalMean(inputs)},
        variance:(inputs) => {return NormalVariance(inputs)},
        sd:(inputs) => {return generalSD(NormalVariance(inputs))},

        lowerValue:(inputs) => { return NormalLowerValue(inputs)},
        upperValue:(inputs) => { return NormalUpperValue(inputs)},

        P:(inputs, x) => {
            return  (1/Math.sqrt(2 * Math.PI * Math.pow(inputs[1],2))) * Math.exp(-(1/(2 * Math.pow(inputs[1],2))) * Math.pow(x-inputs[0],2))
        },

        F:(inputs, x) => {
            // z = x.xx
            let z = ((x - inputs[0])/ inputs[1]).toFixed(2)
            //console.log(z)
            //console.log(Math.floor(+z * 10) )
            //console.log(Math.floor((z * 100) % 10))
            if(z < 0){
                z = +z * -1
                return 1 - standardNormal[+Math.floor(+z * 10) ][+Math.floor((z * 100) % 10)]
            }
            return standardNormal[Math.floor(+z * 10) ][Math.floor((z * 100) % 10)]
        },

        color:"#84FEEB",
        accentColor:"#67FEE3",
        type: "Continuous",
        related: false,
        inputs: [{label:"Mean μ", step:1, value: 0, max:500}, {label:"Standard deviation σ", step: 0.01, value: 0, max:100}],
        description: {
            directions: "Select the mean (μ) and the standard deviation (σ) and select a range for more precise information (x value on the chart)",
            equations: [
                {eq:"f(x)=\\frac{1}{\\sqrt{2\\pi \\sigma^2}} e^{-\\frac{1}{2\\sigma^2}(x-\\mu)^2}", label:"p"},
                {eq:"F_X(x) = \\frac{1}{\\sigma \\sqrt{2\\Pi}} \\int^{x}_{-\\infty}e^{-((t-\\mu)^2)/(2\\sigma^2)}dt", label:"F"},

                {eq:"E(X) = \\mu", label:"mean"},
                {eq:"Var(X) =  \\sigma^2", label:"variance"},
                {eq:"SD(X) = \\sigma", label:"sd"},
            ],
            help:""
        },
    },
    {
        name: "Log-Normal",

        mean:(inputs) => {return inputs[0] * inputs[1]},
        variance:(inputs) => {return inputs[0] * inputs[1] (1 - inputs[1])},
        sd:(inputs) => {return Math.sqrt(inputs[0] * inputs[1] (1 - inputs[1]))},

        P:(n, p, x) => {
            return  combinations(n, x) * Math.pow(p, x) * Math.pow((1-p), (n - x))
        },

        color:"#FCFE94",
        accentColor:"#FBFE67",
        type: "Continuous",
        related: false,
        inputs: [{label:"Mean μ", step: 1, value: 0, max:500}, {label:"Standard deviation σ", step: 1, value: 0, max:500}],
        description: {
            directions: "Select the mean (μ) and the standard deviation (σ) and select a range for more precise information (x value on the chart)",
            equations: [
                {eq:"f(x)=\\frac{1}{\\sqrt{2\\pi \\sigma^2}} e^{-\\frac{1}{2\\sigma^2}(x-\\mu)^2}", label:"p"},
                {eq:"F_X(x) = \\frac{1}{\\sigma \\sqrt{2\\Pi}} \\int^{x}_{-\\infty}e^{-((t-\\mu)^2)/(2\\sigma^2)}dt", label:"F"},

                {eq:"E(X) = \\mu", label:"mean"},
                {eq:"Var(X) =  \\sigma^2", label:"variance"},
                {eq:"SD(X) = \\sigma", label:"sd"},
            ],
            help:""
        },
    },
    {
        name: "t",

        mean:(inputs) => {return inputs[0] * inputs[1]},
        variance:(inputs) => {return inputs[0] * inputs[1] (1 - inputs[1])},
        sd:(inputs) => {return Math.sqrt(inputs[0] * inputs[1] (1 - inputs[1]))},

        P:(n, p, x) => {
            return  combinations(n, x) * Math.pow(p, x) * Math.pow((1-p), (n - x))
        },

        color:"#FE94D4",
        accentColor:"#FE67C2",
        type: "Continuous",
        related: false,
        inputs: [{label:"Degrees of freedom", step: 1, value: 0, max:500}],
        description: {
            directions: "Select the mean (μ) and the standard deviation (σ) and select a range for more precise information (x value on the chart)",
            equations: [
                {eq:"f(x)=\\frac{1}{\\sqrt{2\\pi \\sigma^2}} e^{-\\frac{1}{2\\sigma^2}(x-\\mu)^2}", label:"p"},
                {eq:"F_X(x) = \\frac{1}{\\sigma \\sqrt{2\\Pi}} \\int^{x}_{-\\infty}e^{-((t-\\mu)^2)/(2\\sigma^2)}dt", label:"F"},

                {eq:"E(X) = \\mu", label:"mean"},
                {eq:"Var(X) =  \\sigma^2", label:"variance"},
                {eq:"SD(X) = \\sigma", label:"sd"},
            ],
            help:""
        },
    },
]
export default userOptions;
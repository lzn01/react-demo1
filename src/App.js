import React from "react";

// 创建一个App函数组件
const App = () => {
    return (
        // React.createElement()
        // 这里不能用class要用className
        <div className={"red"}>App 组件<br/>
            <span>================</span>
            <Component1/>
            <span>================</span>
            <Component2/>
            <span>================</span>
            <Component3/>
            <span>================</span>
            <Component4/>
            <span>================</span>
            <Component5/>
            <span>================</span>
            <Component6 numbers={['a', 'b', 'c']}/>
            <span>================</span>
            <Component7 numbers={['aa', 'bb', 'cc']}/>
            <span>================</span>
            <Component numbers={['a', 'b', 'c']}/>
        </div>
    );
}
// JSX的条件判断

const Component1 = () => {
    let a = 10
    return a % 2 === 0 ? <div> a是偶数 </div> : <span> a是奇数 </span>
}
// 如果需要外面的div,可以写成
const Component2 = () => {
    let b = 9
    return (
        <div>
            b的值为 {b}
            {b % 2 === 0 ? <div> b是偶数 </div> : <div> b是奇数 </div>}
        </div>
    )
}
// 还可以写成
const Component3 = () => {
    let c = 8
    const content = (
        <div>
            c的值为 {c}
            {c % 2 === 0 ? <div> c是偶数 </div> : <span> c是奇数 </span>}
        </div>
    )
    return content
}
// 还可以写成
const Component4 = () => {
    let d = 7
    const inner = d % 2 === 0 ? <div> d是偶数 </div> : <span> d是奇数 </span>
    const content = (
        <div>
            <div>
                d的值为 {d}
            </div>
            {inner}
        </div>
    )
    return content
}
// 写if-else
const Component5 = () => {
    let e = 6
    let inner
    if (e % 2 === 0) {
        inner = <div> e是偶数 </div>
    } else {
        inner = <span> e是奇数 </span>
    }
    const content = (
        <div>
            <div>
                e的值为 {e}
            </div>
            {inner}
        </div>
    )
    return content
}
// 循环语句
const Component6 = (props) => {
    return props.numbers.map((n, index) => {
        return <div>下标{index},值为{n}</div>
    })
}
// 如果需要外面的div，还可以写成
const Component7 = (props) => {
    return (<div>
        {props.numbers.map((n, index) => {
            return <div>下标{index},值为{n}</div>
        })}
    </div>)
}
const Component = (props) => {
    const array = []
    for (let i = 0; i < props.numbers.length; i++) {
        array.push(<div> {i}:{props.numbers[i]} </div>)
    }
    return <div> {array} </div>
}
export default App

// file extension must be .jsx
// Components name must start with capital letter
// There must be a default export / export
// There must be a single root returned



// const TestComponent = ()=>{
//     return <h1>Test Component</h1>
// }
// export default TestComponent;
const name = 'Fragment';
export default function TestComponent() {
    return (
        <>
            <div>
                <h1>Test Component using Function</h1>
                <p>There must be a single root</p>

            </div>
            <h2>We can also use react {name}</h2> 
           
        </>
    );

}
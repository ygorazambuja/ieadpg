import Button from "./components/Button";

function App() {
    return (
        <div className="App">
            <Button
                content="Acessar"
                onClick={() => {
                    console.log("oi");
                }}
                primary
            />
        </div>
    );
}

export default App;

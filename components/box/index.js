const TestBox = ({clolor}) => {

  
    return (
        <div>
            <div className={`h-20 w-64 bg-${clolor}-500 text-${clolor}`}>{clolor}</div>
        </div>
    );
}

export default TestBox;
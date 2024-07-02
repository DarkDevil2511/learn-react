
import AppBlockQuotes from "../../../../../components/block-quotes";

function UseReducerGeneral() {
    return (
        <>
            <AppBlockQuotes>
            <p className="text-red-400">## Definition of useReducer Hook:</p>
				<p>
					1. Bất kể logic nào giải quyết được bằng useState, useReducer đều có thể giải quyết được, và ngược
					lại
				</p>
				<p>2. useReducer giải quyết tốt hơn đối với 1 số state phức tạp</p>
				<p>
					3. vd: state có array object lồng nhau nhiều cấp, nhiều state trong component, hoặc state phụ thuộc
					vào state khác
				</p>
            </AppBlockQuotes>

            <div className="flex justify-start gap-3">
				<AppBlockQuotes>
					<p className="text-red-400">## useState</p>
					<p>1. Init state: value 0</p>
					<p>2. Action: up (state + 1) || down (state - 1)</p>
				</AppBlockQuotes>
				<AppBlockQuotes>
					<p className="text-red-400">## useReducer</p>
					<p>1. Init state: value 0</p>
					<p>2. Action: up (state + 1) || down (state - 1)</p>
					<p>3. Reducer</p>
					<p>4. Dispatch action</p>
				</AppBlockQuotes>
            </div>
        </>
    );
}

export default UseReducerGeneral
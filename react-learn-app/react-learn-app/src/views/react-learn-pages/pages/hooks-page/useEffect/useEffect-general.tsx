import AppBlockQuotes from "../../../../../components/block-quotes";

function UseEffectGeneral() {
    return (
        <AppBlockQuotes>
            <p>useEffect has 3 circumstances:</p>
            <p>1. useEffect(callback)</p>
			<p>2. useEffect(callback, [])</p>
			<p>3. useEffect(callback, [deps])</p>
			<p>===================================</p>
			<p className="text-red-400">## Callback in useEffect always called after the component is mounted</p>
			<p className="text-red-400">## Clean up functions always called before the component is unmounted</p>
			<p className="text-red-400">
				## Clean up functions always called from the second time after each component is unmounted or rerender
			</p>
			<p>## Appropriate to 3 cases above:</p>
			<p>1. Callback is called when ever the component is re-render -- uncommon use</p>
			<p>2. Callback is called only once after the component is mounted</p>
			<p>3. Callback is only called when there is a change from deps</p>
			<p>===================================</p>
			<p>## Render always run before the component is mounted</p>
			<p>## Render is consisted in the return of component</p>
			<p>## Component Mounted - after the component is rendered and run inside useEffect</p>
			<p>===================================</p>
			<p>## Definition of render is only about DOM and is one of three state of Mounting</p>
			<p>
				## One component process "mount" only when it render at the first time. There are 3 mounting lifecycle
				methods:
			</p>
			<p>## componentWillMount || render || componentDidMount</p>
			<p>## Definition of mount === componentDidMount</p>
        </AppBlockQuotes>
    );
}

/*
  1. useEffect(callback)
  2. useEffect(callback, [])
  3. useEffect(callback, [deps])
  ===================================
  ## Callback trong useEffect luôn luôn được gọi sau khi component mounted
  ## Clean up func luôn được gọi trước khi component unmounted
  ## Clean up func luôn được gọi từ lần t2 trở đi sau mỗi lần component unmounted hoặc rerender
  ## Tương ứng 3 case trên thì:
  1. Callback được gọi mỗi khi component re-render
  2. Callback được gọi duy nhất 1 lần sau khi component mouted
  3. Callback chỉ được gọi khi có sự thay đổi của deps
  ===================================
  ## Render luôn chạy trước khi component mounted
  ## Render nằm trong phần return của component
  ## Component Mounted - sau khi component render và chạy trong useEffect
  ===================================
  ## Khái niệm render chỉ về DOM và là 1 trong 3 trạng thái của Mounting
  ## Một component thực hiện "mount" chỉ khi nó render trong lần đầu tiên. Có 3 mounting lifecycle methods:
  ## ComponentWillMount || render || componentDidMount
  ## Khái niệm mount === componentDidMount
*/
export default UseEffectGeneral;
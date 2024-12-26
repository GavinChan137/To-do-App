function Header({ percentage }) {
    return (
        <div>
            <h1>To-DoList</h1>
            <h3>Completed {percentage}%</h3>
        </div>)
}
export default Header
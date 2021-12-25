import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'

function ExpenseList(props) {
    return(
        <ul className= "expense-list">
            {props.expenses.map(expense => (
                <ExpenseItem title = {expense.title} amount = {expense.amount} date = {expense.date}/>
            ))}
        </ul>
        
    )
}
export default ExpenseList
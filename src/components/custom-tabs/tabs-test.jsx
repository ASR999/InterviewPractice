import Tabs from "./tabs"
import './tabs.css';


export default function TabsTest() {

    function RandomTabs() {
        return <h1>This is random func!!!</h1>
    }

    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is the content portion 1</div>        
        },
        {
            label: 'Tab 2',
            content: <div>This is the content portion 2</div>        
        },
        {
            label: 'Tab 3',
            content: <div>This is the content portion 3</div>        
        },
        {
            label: 'Tab 4',
            content: <RandomTabs></RandomTabs>        
        }
    ]

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
        
    }

    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}
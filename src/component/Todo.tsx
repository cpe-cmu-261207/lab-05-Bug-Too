import Task from "./Task"
import { useState } from "react";



function Todo() {
    const [state, setState] = useState("");
    const [currenttasks, editcurrenttasks] = useState<string[]>([]);
    const [donetasks, editdonetasks] = useState<string[]>([]);

    const dotask = () => {
        if (state !== "") {
            editcurrenttasks([state, ...currenttasks]);
            setState('')
            
        }
        else {
            alert("Task cannot be empty");
        }
    }

    const updatedonetask = (i: number) => {
        return [currenttasks[i], ...donetasks];
    }

    const removetask = (i: number) => {
        return [...currenttasks.slice(0, i), ...currenttasks.slice(i + 1, currenttasks.length)]
    }

    const doneevent = (i: number) => {
        editdonetasks(updatedonetask(i));
        deleteevent(i);
    };

    const deleteevent = (i: number) => {
        editcurrenttasks(removetask(i));
    };


    const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value);
    }

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === "Enter") {
            dotask();
        }
    }
    const onclick = (ev: React.MouseEvent) => {
        dotask();
    }


    return (
        <div>

            <div className='mx-auto max-w-4xl'>

                {/* task input and add button */}
                <div className='flex space-x-1'>
                    <input value={state} className='border border-gray-400 w-full text-2xl'
                        onKeyDown={onKeyDownCallback} onChange={onchange}></input>
                    <button className='border border-gray-400 w-8 font-bold' onClick={onclick}>+</button>
                </div>

                {/* tasks section */}

                {/* todo section */}

                <div>
                    {currenttasks.map((data, index) => (
                        <Task key={index} id={index} status={true} data={data} done={doneevent} del={deleteevent}></Task>
                    ))}
                </div>

                {/* done tasks section */}

                <div>
                    {donetasks.map((data, index) => (
                        <Task key={index} id={index} status={false} data={data}></Task>
                    ))}
                </div>
            </div>

        </div>
   
    )
}

export default Todo
import "./btnvisibility.css" 
interface taskdata {
    data: string,
    status: boolean,
    id: number,
    done?: any;
    del?: any;

}


function Task({ data, status, id, done, del }: taskdata) {
    if (status === true) {
        return (
            <div className="flex justify-between h-8 items-center py-6 border-b taskbox">
                <span className="text-2xl">{data}</span>
                <div className="flex space-x-1 items-center">
                    <div className="btn">
                        <button
                            className="bg-green-400 w-24 text-2xl"
                            onClick={() => done(id)}
                        >
                            Done
                        </button>
                        <button
                            className="bg-red-400 w-24 text-2xl"
                            onClick={() => del(id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>)

    }
    else {
        return (
            <div className="flex justify-between h-8 items-center py-6 border-b taskbox">
                <span className="text-2xl donework" >{data}</span>
                <div className="flex space-x-1 items-center">
                </div>
            </div>
        )
    }
}

export default Task
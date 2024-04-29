import React, { useState } from "react";
import DateInput from "./dateinput";
import DisplayResponse from "./display";
import StartDateEndDateInput from "./twoDateInput";
import NumberInput from "./countInputBox";
import {useStore} from "./statemanager";
//import axios from 'axios';

function MainForm()
{

    const [serverResponse, setServerResponse] = useStore((state) => [state.serverResponse, state.setServerResponse]);

    const fetchServerData = useStore((state) => state.fetchServerData);
    const fetchServerDataTwo = useStore((state) => state.fetchServerDataTwo);
    const fetchServerDataThree = useStore((state) => state.fetchServerDataThree);


    return (
        <div>

            <div>
            <StartDateEndDateInput onDateSubmit={fetchServerDataTwo} ></StartDateEndDateInput>
            <DateInput onDateSubmit={fetchServerData} ></DateInput>
            <NumberInput onNumberSubmit={fetchServerDataThree}></NumberInput>
        
            </div>

            
            {
                // Short-circuit evaluation
            serverResponse && <DisplayResponse responses = {serverResponse} ></DisplayResponse>
            }


        </div>

    );
}




export {
    MainForm
}
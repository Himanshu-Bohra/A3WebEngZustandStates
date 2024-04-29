import { create } from "zustand";

export const useStore = create((set) => ({

    // const [date, setDate] = useState('null');
    date : 'null',

    setDate: (date) => set({ date }),

    // const [value, setValue] = useState('');
    value : '',

    setValue: (value) => set({ value }),

    serverResponse: null,

    setServerResponse: (serverResponse) => set({ serverResponse }),

    // const [dateStart, setDateStart] = useState('');

    dateStart : '',

    setDateStart: (dateStart) => set({ dateStart }),

    dateEnd : '',

    setDateEnd: (dateEnd) => set({ dateEnd }),

    // const [dateEnd, setDateEnd] = useState('');

    

    fetchServerData: async (date) => {
        try
        {
            date = date.replaceAll('/','-');
            console.log("The formatted date is: " + date);
            const response = await fetch('http://localhost:8080/apod/getByDate/' + date);
            console.log(response.body);
            const json = await response.json();
            set({ serverResponse: [json] });
        }
        catch(error)
        {
            console.error('Error fetching response from SpringBoot Server: ', error);
        }
    },

    fetchServerDataTwo: async (dateStart, dateEnd) => {
        try
        {
            // Only for comparing dates
            const startDate = new Date(dateStart);
            const endDate = new Date(dateEnd);
            if( endDate > startDate)
            {
                // Format the date
                dateStart = dateStart.replaceAll('/','-');
                dateEnd = dateEnd.replaceAll('/','-');
                console.log("The formatted date is: " + dateStart + " and " + dateEnd);

                const response = await fetch('http://localhost:8080/apod/getByDate?start_date=' + dateStart
                + "&end_date=" + dateEnd);
                console.log(response.body);
                const json = await response.json();
                set({ serverResponse: json });
            }
            else
            {
                return
            }
            
        }
        catch(error)
        {
            console.error('Error fetching response from SpringBoot Server: ', error);
        }
    },

    fetchServerDataThree: async (count) => {
        try
        {
            if(count > 0)
            {
                //date = date.replaceAll('/','-');
                console.log("The count is: " + count );
                const response = await fetch('http://localhost:8080/apod/getByCount/' + count);

                // Check if the response is successful
                console.log(`Response OK: ${response.ok}, Status: ${response.status}`);

                // Log the response headers
                console.log(`Response Headers: ${response.headers.get('content-type')}`);
                console.log(response.json);

                console.log(response.body);
                const json = await response.json();
                set({ serverResponse: json });
            }

            else
            {
                return
            }

        }
        catch(error)
        {
            console.error('Error fetching response from SpringBoot Server: ', error);
        }
    },


}));
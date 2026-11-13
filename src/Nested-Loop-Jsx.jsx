import OuterLoopComponent from './OuterLoop-Component'
export const NestedLoopJsx = () => {
    const collegeData = [
        {
            name: "KIT",
            city: "Bhubneshwar",
            id: 1,
            website: "kit.com",
            student: [
                {
                    sname: "Payal",
                    sage: 12,
                    semail: "pay@test.com"
                },
                {
                    sname: "Alt",
                    sage: 19,
                    semail: "alt@test.com"
                },
                {
                    sname: "Aditya",
                    sage: 10,
                    semail: "adi@test.com"
                }
            ]
        },
        {
            name: "HIT",
            city: "Haldia",
            id: 2,
            website: "hit.com",
            student: [
                {
                    sname: "Payal",
                    sage: 12,
                    semail: "pay@test.com"
                },
                {
                    sname: "Alt",
                    sage: 19,
                    semail: "alt@test.com"
                },
                {
                    sname: "Aditya",
                    sage: 10,
                    semail: "adi@test.com"
                }
            ]
        },
        {
            name: "TIU",
            city: "Kolkata",
            id: 3,
            website: "tiu.com",
            student: [
                {
                    sname: "Payal",
                    sage: 12,
                    semail: "pay@test.com"
                },
                {
                    sname: "Alt",
                    sage: 19,
                    semail: "alt@test.com"
                },
                {
                    sname: "Aditya",
                    sage: 10,
                    semail: "adi@test.com"
                }
            ]
        }
    ]
    return (
        <>
            {
                collegeData.map((clg) => {
                    return (
                        <OuterLoopComponent key={clg.id} college={clg} />
                    )
                })
            }
        </>
    )
}
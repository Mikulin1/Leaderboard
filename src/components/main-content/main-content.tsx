import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './main-content.module.css'
import LeaderboardTable from "../leaderboard-table/leaderboard-table";
import {data} from "../../data";

const MainContent = () => {
    const [filterData, setFilterData] = useState(data)
    const [filter, setFilter] = useState<string>()

    useEffect(() => {
        if (!filter)
            setFilterData(data)
    },[filter])

    const onClick = () => setFilterData(data.filter(item => item.name.includes(filter || "")))
    const onChange = (evt: ChangeEvent<HTMLInputElement>) => setFilter(evt.currentTarget.value)

    return (
        <main className={styles.container}>
            <div data-aos="fade-up" data-aos-duration="2000" className={styles.searchContainer}>
                <p className={styles.searchText}>PLAYER SEARCH</p>
                <label className={styles.searchInputContainer}>
                    <input className={styles.searchInput} placeholder={"@nickname"} type="text" value={filter} onChange={onChange}/>
                    <button className={styles.searchButton} onClick={onClick}>
                        <svg className={styles.searchButtonIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
                    </button>
                </label>
            </div>
            <LeaderboardTable items={filterData}/>
        </main>
    );
};

export default MainContent;
import React, {FC} from 'react';
import crown from '../../images/bx-crown.svg'
import podium from '../../images/Group6.png'
import styles from "./leadearboard-table.module.css"
import {IData} from "../../data";

interface IRowProps {
    index: number;
    sales: number;
    name: string;
}

const Row:FC<IRowProps> = ({index,sales,name}) => {
    return (
        <li className={styles.rows}>
            <p className={styles.rank}>
                {index <= 3 && <img src={crown} alt=""/>}
                {index}
            </p>
            <p className={styles.player}>{name}</p>
            <p className={styles.sales}>{sales}K</p>
        </li>
    )
}

interface ILeaderboardTableProps {
    items: IData[];
}

const LeaderboardTable:FC<ILeaderboardTableProps> = ({items}) => {
    return (
        <div className={styles.container}>
            
            <p className={styles.title}><img className={styles.podium} src={podium} alt=""/>NEW WORLD GOLD SALES LEADERBOARD</p>
            <div className={styles.tableInfo}>
                <p className={styles.rank}>Rank</p>
                <p className={styles.player}>Player</p>
                <p className={styles.sales}>Sales</p>
            </div>
            <ul className={styles.rowsContainer}>
                {items.map((item) => <Row sales={item.sales} name={item.name} index={item.rank}/>)}
            </ul>    
            </div>
    );
};

export default LeaderboardTable;
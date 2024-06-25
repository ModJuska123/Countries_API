import { Country } from '../country/Country';
import style from './Region.module.css';

export function Region({ title, list }) {
    return (
        <div className={style.region}>
            <h2 className={style.regionTitle}>{title}</h2>
            <ul className={style.countryList}>
                {list.map((country, idx) => <Country key={idx} data={country} />)}
            </ul>
        </div>
    );
}

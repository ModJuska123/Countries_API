import style from './Country.module.css';

export function Country({ data }) {
    return (
        <div className={style.country}>
            <img className={style.flag} src={data.flags.png} alt={data.name.official} />
            <div className={style.countryName}>{data.name.common}</div>
        </div>
    );
}

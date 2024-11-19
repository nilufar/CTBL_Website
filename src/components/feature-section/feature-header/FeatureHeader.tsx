import styles from './featureHeader.module.css';

const FeatureHeader = () => {
    return (
        <div className={styles.container}>
            <div className='m-10 text-lg font-light text-dark-liver text-center'>
            <p>
                For companies operating in the information age, we help to leverage new technologies to competitive advantage. 
            </p>
            <p>
                We deliver high-value innovated solutions by bridging the gap between business and technology.
            </p>
            </div>
        </div>
    );
}

export default FeatureHeader;
import { Image, Text, View, Button, StyleSheet } from 'react-native';

const Loans = ({ loansData, onLoans }) => {

    return (
        <View style={styles.container}>
            <Image source={require('../assets/spaceLogout.jpg')} style={styles.backgroundImage} />
            <Text style={styles.text} >Available Loans</Text>
            
                    {loansData.map((loan, index) => (
                        <View key={index} style={styles.card}>
                            <Text style={styles.label}>Amount:</Text>
                            <Text style={styles.value}>{loan.amount}</Text>
                            <Text style={styles.label}>Rate:</Text>
                            <Text style={styles.value}>{loan.rate}%</Text>
                            <Text style={styles.label}>Term in Days:</Text>
                            <Text style={styles.value}>{loan.termInDays}</Text>
                            <Text style={styles.label}>Type:</Text>
                            <Text style={styles.value}>{loan.type}</Text>
                            <Button style={styles.ButtonOpenModals} title="Take out" onPress={() => onLoans(loan.type)} />
                        </View>
                    ))

            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    card: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
        height: "50%",
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 10,
        padding: 20,
        margin: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 1,
    },
    value: {
        fontSize: 16,
        marginLeft: 10,
        marginBottom: 15,
    },
    buttonsContainer: {
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "50%",
    },

    ButtonOpenModals: {
        color: "#fff",
        backgroundColor: "#FF9B00",
        alignItems: "center",
        justifyContent: "center",
    },


    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        marginBottom: 5,
    },
});

export default Loans;
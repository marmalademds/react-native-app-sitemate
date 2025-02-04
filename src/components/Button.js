import { Button } from "react-native"
import { text, layout } from '../styles'

export const LaunchButton = ({label, onPress}) => {
    return (
        <Button
            title={label}
            onPress={onPress}
            color={layout.button}
        >
        </Button>
    )
}
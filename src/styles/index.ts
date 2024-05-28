import { colors, fontSize } from '@/constants/tokens'
import { StyleSheet } from 'react-native'

const defaultStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	text: {
		fontSize: fontSize.base,
		color: colors.text,
	},
})

const utilsStyles = StyleSheet.create({
	itemSeperator: {
		borderColor: colors.textMuted,
		borderWidth: StyleSheet.hairlineWidth,
		opacity: 0.3,
	},
	slider: {
		height: 7,
		borderRadius: 16,
	},
	emptyContentText: {
		...defaultStyles.text,
		color: colors.primary,
		textAlign: 'center',
		marginTop: 20,
	},
	emptyContentImage: {
		width: 100,
		height: 100,
		opacity: 0.5,
		alignSelf: 'center',
		marginVertical: 20,
	},
	centeredRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export { utilsStyles, defaultStyles }

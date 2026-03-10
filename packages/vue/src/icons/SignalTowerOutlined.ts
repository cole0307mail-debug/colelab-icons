// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SignalTowerOutlinedSvg from '@colelab/icons-svg/es/asn/SignalTowerOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SignalTowerOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SignalTowerOutlinedSvg }, slots);
  },
});

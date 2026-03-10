// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TrafficPoliceOutlinedSvg from '@colelab/icons-svg/es/asn/TrafficPoliceOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TrafficPoliceOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TrafficPoliceOutlinedSvg }, slots);
  },
});

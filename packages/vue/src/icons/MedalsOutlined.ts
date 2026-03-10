// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MedalsOutlinedSvg from '@colelab/icons-svg/es/asn/MedalsOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MedalsOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MedalsOutlinedSvg }, slots);
  },
});

// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EntranceOutlinedSvg from '@colelab/icons-svg/es/asn/EntranceOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EntranceOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EntranceOutlinedSvg }, slots);
  },
});

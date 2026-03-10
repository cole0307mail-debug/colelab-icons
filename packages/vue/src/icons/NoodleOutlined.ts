// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NoodleOutlinedSvg from '@colelab/icons-svg/es/asn/NoodleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NoodleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NoodleOutlinedSvg }, slots);
  },
});

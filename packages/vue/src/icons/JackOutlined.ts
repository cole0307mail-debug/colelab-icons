// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import JackOutlinedSvg from '@colelab/icons-svg/es/asn/JackOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'JackOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: JackOutlinedSvg }, slots);
  },
});

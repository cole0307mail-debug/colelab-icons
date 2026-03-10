// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UpCircleOutlinedSvg from '@colelab/icons-svg/es/asn/UpCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UpCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UpCircleOutlinedSvg }, slots);
  },
});

// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MeansAccessOutlinedSvg from '@colelab/icons-svg/es/asn/MeansAccessOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MeansAccessOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MeansAccessOutlinedSvg }, slots);
  },
});

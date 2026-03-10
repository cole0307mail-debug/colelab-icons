// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LoadingOutlinedSvg from '@colelab/icons-svg/es/asn/LoadingOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LoadingOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LoadingOutlinedSvg }, slots);
  },
});

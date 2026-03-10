// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HydrolabOutlinedSvg from '@colelab/icons-svg/es/asn/HydrolabOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HydrolabOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HydrolabOutlinedSvg }, slots);
  },
});

// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PlaneOutlinedSvg from '@colelab/icons-svg/es/asn/PlaneOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PlaneOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PlaneOutlinedSvg }, slots);
  },
});

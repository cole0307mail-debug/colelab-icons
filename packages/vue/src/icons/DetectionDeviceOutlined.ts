// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DetectionDeviceOutlinedSvg from '@colelab/icons-svg/es/asn/DetectionDeviceOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DetectionDeviceOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DetectionDeviceOutlinedSvg }, slots);
  },
});
